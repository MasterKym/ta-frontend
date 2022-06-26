export interface IProfile {
    id: number;
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    dateOfBirth: string;
    phone: string;
    role: 'USER' | 'ADMIN' | 'SUPER_ADMIN';
}

const getProfile = async (
    success: (profile: IProfile) => void,
    failure: () => void,
) => {
    try {
        const res = await fetch('http://localhost:4000/profile', {
            credentials: 'include',
        });
        const data = await res.json();
        if (res.status === 200) success(data);
        else failure();
    } catch (err) {
        failure();
    }
};

export default getProfile;
