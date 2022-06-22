export interface IProfile {
    id: number;
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    dateOfBirth: string;
    phone: string;
    role: 'USER' | 'ADMIN' | 'SUPER_ADMIN';
    createdAt: '2022-06-21T19:19:05.357Z';
    updatedAt: '2022-06-21T19:36:59.616Z';
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
