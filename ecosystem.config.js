module.exports = {
    apps: [
        {
            name: 'blog',
            port: 3002,
            exec_mode: 'fork',
            instances: 1,
            script: 'src/index.js',
            //args: 'start -c ./nuxt.config.js',
            cwd: './',
            log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
        }
    ]
};
