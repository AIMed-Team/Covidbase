const IS_DEV = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

const Config = {
    ApiBaseUrl: IS_DEV ? 'https://localhost/' : '/',
};

export default Config;
