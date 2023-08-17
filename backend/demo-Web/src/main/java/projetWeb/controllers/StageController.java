package projetWeb.controllers;

import java.util.HashMap;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.persistence.EntityNotFoundException;
import lombok.AllArgsConstructor;
import projetWeb.entities.Stage;

import projetWeb.services.StageService;

@RestController
@AllArgsConstructor
@CrossOrigin(origins="http://localhost:59608")
@RequestMapping("/api/v1")
public class StageController {

	private StageService stageService;
	@GetMapping("/stage")
	public List<Stage> getAllStages(){
		return  stageService.getAllStages();
	} 
	@GetMapping("/stage/{id}")
	public Stage getStageById(@PathVariable Long id) {
		return stageService.getStageById(id).
				orElseThrow(
						()->new EntityNotFoundException("Requested stage not found")
						);
	}
	@PostMapping("/stage")
	public Stage addStage(@RequestBody Stage stage)
	{
	return stageService.addStage(stage);
	}

	@PutMapping("/stage")
	public ResponseEntity<?> updateStage(@RequestBody Stage stage)
	{ 
	if (stageService.existsById(stage.getId()))
	{
	Stage stage1 = stageService.getStageById(stage.getId()).orElseThrow
	(
	()->new EntityNotFoundException("Requested stage not found")
	);
	stage1.setTitle(stage.getTitle());
	stage1.setDescription(stage.getDescription());
	stage1.setNiveau(stage.getNiveau());
	stage1.setDuree(stage.getDuree());
	stage1.setProfesseur(stage.getProfesseur());
	stage1.setEntreprise(stage.getEntreprise());
	stageService.addStage(stage1); 
	return ResponseEntity.ok().body(stage1);
	}
	else
	{
	HashMap<String,String> message = new HashMap<>();
	message.put("message",stage.getId()+"stage not found or matched");
	return ResponseEntity.status(HttpStatus.NOT_FOUND).body(message);
	}
	}
	
	@DeleteMapping("/stage/{id}")
	public ResponseEntity<?> deleteStage(@PathVariable long id)
	{ 
	if (stageService.existsById(id))
	{
		stageService.deleteStage(id);
		HashMap<String,String> message = new HashMap<>();
		message.put("message","Stage with id "+id+" deleted successfully");
		return ResponseEntity.status(HttpStatus.NOT_FOUND).body(message);
	}
	else
	{
	HashMap<String,String> message = new HashMap<>();
	message.put("message",id+" stage not found or matched");
	return ResponseEntity.status(HttpStatus.NOT_FOUND).body(message);
	}}
}
