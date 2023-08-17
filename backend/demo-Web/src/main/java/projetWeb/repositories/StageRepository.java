package projetWeb.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import projetWeb.entities.Stage;

public interface StageRepository extends JpaRepository<Stage, Long> {

	@Query(value = "select * from stage order by Durée asc", nativeQuery = true)
	public List<Stage> getAllStageByDuree(); 
}
