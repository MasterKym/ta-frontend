import { IProfileInputs } from 'components/Settings';

export interface IProfile {
    id: number;
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    dateOfBirth: string;
    phone: string;
    role: 'USER' | 'ADMIN' | 'SUPER_ADMIN';
    createdAt: string;
    updatedAt: string;
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

const updateProfile = async (
    inputs: IProfileInputs,
    success: () => void,
    failure: (message: string) => void,
) => {
    try {
        const res = await fetch('http://localhost:4000/profile', {
            method: 'PUT',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(inputs),
        });
        if (res.status === 200) success();
        else failure('Invalid Inputs');
    } catch (err) {
        failure('Something went wrong');
    }
};

export default { getProfile, updateProfile };
