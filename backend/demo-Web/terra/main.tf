resource "kubernetes_namespace" "backend" {
  metadata {
    name = "backend"
  }
  }

  module "mysql_db" {
  source = "./mysql-db"
  #namespace = kubernetes_namespace.backend.metadata[0].name
}

  module "spring_app" {
  source = "./spring_app"

  #namespace = kubernetes_namespace.backend.metadata[0].name
}



