pipeline {
    agent any

    stages {
        stage('Test') {
            steps {
                sh 'npm ci'
                sh 'node --check server.js'
            }
        }
    }
}
