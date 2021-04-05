export interface ITabTitle {
    title: string;
    index: number;
    setSelectedTab: (index: number) => void;
    selectedTab: number;
}