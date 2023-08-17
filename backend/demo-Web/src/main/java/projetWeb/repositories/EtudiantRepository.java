package projetWeb.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import projetWeb.entities.Etudiant;

public interface EtudiantRepository extends JpaRepository<Etudiant, Long>{

}
