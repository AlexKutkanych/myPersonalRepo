import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { useHistory } from 'react-router-dom';
import { createPaymentOrder } from '../../services/createPaymentOrder';
import { executeOrder } from '../../services/executeOrder';
import { IPayPalButton } from './types';
import { getAuthToken } from '../../utils/helpers';

declare global {
    interface Window {
        paypal: any;
    }
}

export default function PayPalButton({ tournamentId, clientId, currencyCode, mode, callback }: IPayPalButton) {
    const [sdkReady, setSdkReady] = useState(false);
    const history = useHistory();

    const addPayPalSdk = () => {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}&currency=${(currencyCode || '').toUpperCase()}&disable-funding=card`;
        script.async = true;
        script.onload = () => {
            setSdkReady(true);
            callback(true);
        };
        script.onerror = () => {
            throw new Error('PayPal SDK could not be loaded.');
        };
        document.body.appendChild(script);
    };


    useEffect(() => {
        if (window !== undefined && window.paypal === undefined) {
            addPayPalSdk();
        }
    }, []);

    if (!sdkReady && window.paypal === undefined) {
        return null;
    }

    const Button = window.paypal.Buttons.driver('react', {
        React,
        ReactDOM,
    });

    const createOrder = async (data: any) => {
        try {
            const token = getAuthToken();
            const { data: { body: { order: { id } } } } = await createPaymentOrder(tournamentId, token);
            return id;
        } catch (err) {
            console.log(err, 'create order');
        }
    };

    const onApprove = async (data: any) => {
        //execute payment order
        const { payerID: payerId, paymentID: paymentId } = data;

        try {
            const token = getAuthToken();
            await executeOrder({ tournamentId, paymentId, payerId, token });
            history.push('/payment-success');
        } catch(err) {
            console.log(err, 'create order');
        }
    };

    return (
        <Button
            createOrder={createOrder}
            onApprove={onApprove}
            style={{
                layout: 'vertical',
                color: 'gold',
                shape: 'pill',
                label: 'paypal',
                height: 40,
            }}
        />
    );
}