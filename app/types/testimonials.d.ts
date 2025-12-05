export interface IReview {
    id: number;
    text: string;
    author: string;
    title: string;
    avatar: string;
}

export interface ITestimonialApiResponse {
    [key: string]: IReview[];
}