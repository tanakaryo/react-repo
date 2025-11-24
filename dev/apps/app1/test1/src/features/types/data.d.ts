// User
export type User = {
    id: number;
    username: string;
    displayName: string;
    email: string;
    profileImageUrl: string;
    description: string;
};

// Product
export type Product = {
    id: number;
    title: string;
    description: string;
    category: "shoes" | "clothes" | "book";
    imageUrl: string;
    price: number;
    condition: string;
    owner: ProductOwner;
};

// Product Owner
type ProductOwner = {
    id: number;
    username: string;
    displayName: string;
    email: string;
    profileImageUrl: string;
    description: string;
};