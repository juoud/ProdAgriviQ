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
    @NamedQuery(name="findAllRegions", query="SELECT r FROM Region r"),
    @NamedQuery(name = "findRegionByID", query = "SELECT r FROM Region r WHERE r.id = :rId"),
    @NamedQuery(name = "findRegionByNom", query = "SELECT r FROM Region r WHERE r.region = :rNom")
})
public class Region implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    
    @Column
    @NotNull
    private String region;
    
    public Region(){
            
    }
    
    public Region(String region){
        this.region = region;
    }
    
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getRegion() {
        return region;
    }

    public void setRegion(String region) {
        this.region = region;
    }

}
