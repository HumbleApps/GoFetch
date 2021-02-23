export type CreateUserResponse = {
    additionalUserInfo: {
        isNewUser: boolean;
    },
    user: {
        displayName: null;
        email: string;
        emailVerified: boolean;
        isAnonymous: boolean;
        metadata: any[];
        phoneNumber: null | number;
        photoURL: null | string;
        providerData: any[];
        providerId: "firebase";
        uid: string;
    }
}