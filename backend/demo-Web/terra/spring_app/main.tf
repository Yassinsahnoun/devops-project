resource "kubernetes_deployment" "spring_app" {
  metadata {
    name      = "spring-app"
  }

  spec {
    replicas = 1

    selector {
      match_labels = {
        app = "spring-app"
      }
    }

    template {
      metadata {
        labels = {
          app = "spring-app"
        }
      }

      spec {
        container {
          name  = "demo"
          image = "yassin24/spring:latest"
          env {
             name = "SPRING_DATASOURCE_URL"       
             value = "jdbc:mysql://db:3306/projetdb?autoReconnect=true&useSSL=false"
          }
          env {
             name = "SPRING_DATASOURCE_USERNAME" 
             value = "ubuntu"
              }
          env{
            name = "SPRING_DATASOURCE_PASSWORD"
            value = "ubuntu"
          }
        }
      }
    }
  }
}

resource "kubernetes_service" "spring_app" {
  metadata {
    name      = "spring-app-service"
  }

  spec {
    selector = {
      app = "spring-app"
    }

    port {
      port        = 8080
      target_port = 8080
    }
  }
}
