pipeline {
  agent { label 'master' }
  environment {
    JENKINS_NODE_COOKIE = "donotkillme"
  }
  stages {
    stage('build') {
      steps {
        echo 'build'
        bat 'npm install --registry=https://registry.npm.taobao.org'
      }
    }
    stage('deploy') {
      steps {
        echo 'deploy'
        bat 'npm run build'
        bat 'copy build\\* D:\\nginx-1.18.0\\html\\'
      }
    }
  }
}