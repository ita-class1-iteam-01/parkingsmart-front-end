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
        bat "run.bat"
        bat 'start /b npm run build'
      }
    }
  }
}