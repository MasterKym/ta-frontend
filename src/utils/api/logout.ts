const logout = async (success: () => void, failure: () => void) => {
    try {
        const res = await fetch('http://localhost:4000/signout', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (res.status === 200) success();
        else failure();
    } catch (err) {
        failure();
    }
};

export default logout;
