export interface IService {
    id: number;
    iconName: string;
    title: string;
    features: string[];
    image: string;
}

export interface IServiceApiResponse {
    [key: string]: IService[];
}