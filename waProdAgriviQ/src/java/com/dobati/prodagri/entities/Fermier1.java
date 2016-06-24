/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.dobati.prodagri.entities;

import java.io.Serializable;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotNull;

/**
 *
 * @author Administrateur
 */
@Entity
public class Fermier1 implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    
    @NotNull
    private String nomFermier;
    
    @NotNull
    private String prenomFermier;
    
    private String adresseFermier;
    private String telephoneFermier;
    private String adressecourrielFermier;
    
    @NotNull
    private String pseudonymeFermier;
    
    @NotNull
    private String motdepasseFermier;
    
    @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.REFRESH})
    private Region regionFermier;
    
    
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

}
