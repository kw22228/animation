// craco : create-react-app의 설정을 덮어쓴다.
//(Create React App Configure Override)
//package.json의 start, build, test를 바꿔준다.
// "start": "craco start", "build": "craco build"

module.exports = {
    webpack: {
        configure: {
            module: {
                rules: [
                    {
                        type: 'javascript/auto',
                        test: /\.mjs$/,
                        include: /node_modules/,
                    },
                ],
            },
        },
    },
};
