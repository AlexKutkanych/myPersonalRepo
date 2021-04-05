import { emailRgx, passwordRgx } from './regexp';

export const formRestrictions: any = {
    fullName: {
        restrictions: {
            minLength: 3,
            maxLength: 100,
            required: true,
        },
        errorMessage: {
            required: 'This field is required',
            minLength: 'Fullname length must be at least 3 characters long',
            maxLength: 'Fullname length must be less than or equal to 100 characters long',
        }
    },
    email: {
        restrictions: {
            pattern: emailRgx,
            required: true,
        },
        errorMessage: {
            required: 'This field is required',
            pattern: 'Invalid email, it should be like this format anyone@domain.any',
        }
    },
    password: {
        restrictions: {
            pattern: passwordRgx,
            minLength: 7,
            required: true,
        },
        errorMessage: {
            required: 'This field is required',
            minLength: 'Fullname length must be at least 7 characters long',
            pattern: 'Invalid password, it should be grater than 7 characters and includes numbers and letters',
        }
    },
    country: {
        restrictions: {
            minLength: 2,
            required: true,
        },
        errorMessage: {
            required: 'This field is required',
            minLength: 'Country name length must be at least 2 characters long',
        }
    },
    birthDate: {
        restrictions: {
            required: true,
            maxLength: 2,
            min: 1,
            max: 31,
            pattern: /^[0-9]{1,2}$/
        },
        errorMessage: {
            required: 'This field is required',
            maxLength: 'Wrong Birth Date',
            min: 'Min text',
            max: 'Max text',
            pattern: 'Only digits allowed'
        }
    },
    birthMonth: {
        restrictions: {
            required: true,
            maxLength: 2,
            min: 1,
            max: 12,
            pattern: /^[0-9]{1,2}$/
        },
        errorMessage: {
            required: 'This field is required',
            maxLength: 'Wrong Birth Month',
            min: 'Min text',
            max: 'Max text',
            pattern: 'Only digits allowed'
        }
    },
    birthYear: {
        restrictions: {
            required: true,
            maxLength: 4,
            pattern: /^[0-9]{4}$/
        },
        errorMessage: {
            required: 'This field is required',
            maxLength: 'Wrong Birth Year',
            pattern: 'Only digits allowed'
        }
    },
    checkTerms: {
        restrictions: {
            required: true,
        },
        errorMessage: {
            required: 'This field is required',
        }
    },
    platformId: {
        restrictions: {
            required: true,
        },
        errorMessage: {
            required: 'This field is required',
        }
    },
    platform: {
        restrictions: {
            required: true,
        },
        errorMessage: {
            required: 'This field is required',
        }
    }
}