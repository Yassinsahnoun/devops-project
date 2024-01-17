resource "kubernetes_deployment" "mysql_db" {
  metadata {
    name      = "mysql-db"
    
  }

  spec {
    replicas = 1

    selector {
      match_labels = {
        app = "mysql-db"
      }
    }

    template {
      metadata {
        labels = {
          app = "mysql-db"
        }
      }

      spec {
        container {
          name  = "database"
          image = "mysql:5.7"
          env{
            name = "MYSQL_DATABASE"
            value = "projetdb"
          }
          env {
            name  = "MYSQL_ROOT_PASSWORD"
            value = "ubuntu"
          }
          env {
            name  = "MYSQL_USER"
            value = "ubuntu"
          }
          env {
            name  = "MYSQL_PASSWORD"
            value = "ubuntu"
          }
          
          port {
            container_port = 3306
          }
        }
    
      }
    }
  }
}


resource "kubernetes_service" "mysql_db" {
  metadata {
    name      = "mysql-db-service"
    
  }

  spec {
    selector = {
      app = "mysql-db"
    }

    port {
      port        = 3306
      target_port = 3306
    }
  }
}