/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.dobati.prodagri.entities;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.validation.constraints.NotNull;

/**
 *
 * @author Administrateur
 */
@Entity
@NamedQueries({
    @NamedQuery(name = "findAllVarieteProdAgri", query = "SELECT v FROM VarieteProduitsAgricoles v"),
    @NamedQuery(name="findVarieteProdAgriByID", query = "SELECT v FROM VarieteProduitsAgricoles v WHERE v.id = :vId"),
    @NamedQuery(name = "findVarieteProdAgriByNom", query = "SELECT v FROM VarieteProduitsAgricoles v WHERE v.nomVarieteProduitsAgricoles = :vNom")
})
public class VarieteProduitsAgricoles implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    
    @Column
    @NotNull
    private String nomVarieteProduitsAgricoles;
    
    public VarieteProduitsAgricoles(){
        
    }
    
    public VarieteProduitsAgricoles(String nomVarieteProduitsAgricoles){
        this.nomVarieteProduitsAgricoles= nomVarieteProduitsAgricoles;
    }
    
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNomVarieteProduitsAgricoles() {
        return nomVarieteProduitsAgricoles;
    }

    public void setNomVarieteProduitsAgricoles(String nomVarieteProduitsAgricoles) {
        this.nomVarieteProduitsAgricoles = nomVarieteProduitsAgricoles;
    }
    
}
