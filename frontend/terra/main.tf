provider "kubernetes" {
  config_path = "~/.kube/config"  # Path to your Kubernetes config file
}
resource "kubernetes_deployment" "angular" {
  metadata {
    name      = "angular"
    namespace = "backend"
  }
  spec {
    replicas = 1  # Number of replicas for your Angular app

    selector {
      match_labels = {
        app = "angular"
      }
    }
    template {
      metadata {
        labels = {
          app = "angular"
        }
      }
      spec {
        container {
          name  = "angular"
          image = "yassin24/front:latest"  # Replace with your Angular Docker image

          # You can add environment variables or other configuration here
        }
      }
    }
  }
}
resource "kubernetes_service" "angular" {
  metadata {
    name = "angular-app-service"
  }

  spec {
    selector = {
      app = "angular"
    }
    port {
      port = 80  # Port on which your Angular app will be accessible within the cluster
    }
  }
}
