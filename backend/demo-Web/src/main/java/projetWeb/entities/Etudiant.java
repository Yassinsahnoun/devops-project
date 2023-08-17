package projetWeb.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Etudiant")
public class Etudiant {
	@Id
    
    private Long id;
    @Column(name= "NomEtud")
    private String nom;
    
    @Column(name= "PrenomEtud")
    private String prenom;
    @Column(name= "NiveauEtud")
    private String niveau;
    @Column(name= "AdresseEtud")
    private String adresse;
    @Column(name= "EmailEtud")
    private String email;
    @Column(name= "Titresujet")
    private String titresujet;
    @Column(name= "Validation")
    private String validation;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getNom() {
		return nom;
	}
	public void setNom(String nom) {
		this.nom = nom;
	}
	public String getPrenom() {
		return prenom;
	}
	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}
	public String getNiveau() {
		return niveau;
	}
	public void setNiveau(String niveau) {
		this.niveau = niveau;
	}
	public String getAdresse() {
		return adresse;
	}
	public void setAdresse(String adresse) {
		this.adresse = adresse;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getTitresujet() {
		return titresujet;
	}
	public void setTitresujet(String titresujet) {
		this.titresujet = titresujet;
	}
	public String getValidation() {
		return validation;
	}
	public void setValidation(String validation) {
		this.validation = validation;
	}
    
}
