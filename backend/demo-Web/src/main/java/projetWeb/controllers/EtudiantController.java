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
import projetWeb.entities.Etudiant;

import projetWeb.services.EtudiantService;

@RestController
@AllArgsConstructor
@CrossOrigin(origins="http://localhost:59608")
@RequestMapping("/api/v1")
public class EtudiantController {

	private EtudiantService etudiantService;
	@GetMapping("/etudiant")
	public List<Etudiant> getAllEtudiants(){
		return  etudiantService.getAllEtudiants();
	} 
	@GetMapping("/etudiant/{id}")
	public Etudiant getEtudiantById(@PathVariable Long id) {
		return etudiantService.getEtudiantById(id).
				orElseThrow(
				()->new EntityNotFoundException("Requested etudiant not found")
				);
	}
	@PostMapping("/etudiant")
	public Etudiant addEtudiant(@RequestBody Etudiant etudiant) {
		return etudiantService.addEtudiant(etudiant);
	}
	@PutMapping("/etudiant")
	public ResponseEntity<?> updateEtudiant(@RequestBody Etudiant etudiant){
		if(etudiantService.existsById(etudiant.getId())) {
			Etudiant etudiant1 = etudiantService.getEtudiantById(etudiant.getId()).
					orElseThrow(
							()->new EntityNotFoundException("Requested etudiant not found")
							);
			etudiant1.setNom(etudiant.getNom());
			etudiant1.setPrenom(etudiant.getPrenom());
			etudiant1.setNiveau(etudiant.getNiveau());
			etudiant1.setAdresse(etudiant.getAdresse());
			etudiant1.setEmail(etudiant.getEmail());
			etudiant1.setTitresujet(etudiant.getTitresujet());
			etudiant1.setValidation(etudiant.getValidation());
		
			etudiantService.addEtudiant(etudiant1);
			return ResponseEntity.ok().body(etudiant1);
		}
		else
		{
			HashMap<String,String> message = new HashMap<>();
			message.put("message", etudiant.getId() +"etudiant not found or matched");
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(message);
			
		}
	}
	@DeleteMapping("/etudiant/{id}")
	public ResponseEntity<?> deleteEtudiant(@PathVariable Long id ){
		if(etudiantService.existsById(id)) {
			
			etudiantService.deleteEtudiant(id);
			HashMap<String,String> message = new HashMap<>();
			message.put("message", "Etudiant with id "+id +" deleted successfully");
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(message);
			
		}
		else
		{

			HashMap<String,String> message = new HashMap<>();
			message.put("message", id +" etudiant not found or matched");
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(message);
			
		}
	}
	
	
	 
}
