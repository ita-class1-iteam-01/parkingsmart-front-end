pipeline {
  agent { label 'master' }
  environment {
    JENKINS_NODE_COOKIE = "donotkillme"
  }
  stages {
    stage('build') {
      steps {
        echo 'build'
        bat 'npm install'
      }
    }
    stage('deploy') {
      steps {
        echo 'deploy'
        bat "run.bat"
        bat 'npm start'
      }
    }
  }
}