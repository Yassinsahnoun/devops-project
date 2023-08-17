package projetWeb.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import projetWeb.entities.Etudiant;
import projetWeb.repositories.EtudiantRepository;

@Service
public class EtudiantService {
	@Autowired
    private EtudiantRepository etudiantRepository;

    public List<Etudiant> getAllEtudiants() {
        return etudiantRepository.findAll();
    }

    public Optional<Etudiant> getEtudiantById(Long id) {
        return etudiantRepository.findById(id);
    }

    public Etudiant addEtudiant(Etudiant etudiant) {
        return etudiantRepository.saveAndFlush(etudiant);
    }

    public void deleteEtudiant(Long id) {
        etudiantRepository.deleteById(id);
    }
    public boolean existsById(Long id) {
    	return etudiantRepository.existsById(id);
    }
}
