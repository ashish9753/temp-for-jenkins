pipeline {
    agent any

    options {
        skipDefaultCheckout(true)
    }

    stages {
        stage('Pull') {
            steps {
                checkout scm
            }
        }

        stage('Install and Test') {
            steps {
                sh 'npm ci --omit=dev'
                sh 'node --check server.js'
            }
        }

        stage('Run Server') {
            steps {
                sh '''
                    if [ -f server.pid ] && kill -0 "$(cat server.pid)" 2>/dev/null; then
                        kill "$(cat server.pid)"
                    fi

                    JENKINS_NODE_COOKIE=dontKillMe nohup npm start > server.log 2>&1 &
                    echo $! > server.pid

                    sleep 2
                    curl --fail --silent http://localhost:3001/ > /dev/null
                '''
            }
        }
    }
}
