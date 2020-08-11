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
        bat 'npm run build'
      }
    }
    stage('deploy') {
      steps {
        echo 'deploy'
        bat 'xcopy build D:\\nginx-1.19.1\\html\\  /S  /E /Y'
        // bat 'D:\\nginx-1.19.1\\nginx.exe -s reload'
      }
    }
  }
}
