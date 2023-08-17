package projetWeb.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import projetWeb.entities.Stage;
import projetWeb.repositories.StageRepository;
@Service
public class StageService {

    @Autowired
    private StageRepository stageRepository;

    public List<Stage> getAllStages() {
        return stageRepository.getAllStageByDuree();
    }

    public Optional<Stage> getStageById(Long id) {
        return stageRepository.findById(id);
    }

    public Stage addStage(Stage stage) {
        return stageRepository.saveAndFlush(stage);
    }


    public void deleteStage(Long id) {
        stageRepository.deleteById(id);
    }

    public boolean existsById(Long id) {
    	return stageRepository.existsById(id);
    }

}
