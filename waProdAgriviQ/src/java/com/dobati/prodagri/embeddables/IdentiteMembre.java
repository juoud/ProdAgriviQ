/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.dobati.prodagri.embeddables;

import java.sql.Timestamp;
import javax.persistence.Embeddable;

/**
 *
 * @author Administrateur
 */
@Embeddable
public class IdentiteMembre {
    private String nomMembre;
    private String prenomMembre;
    private Timestamp datenaissanceMembre;
    private String sexeMembre;

    public String getNomMembre() {
        return nomMembre;
    }

    public void setNomMembre(String nomMembre) {
        this.nomMembre = nomMembre;
    }

    public String getPrenomMembre() {
        return prenomMembre;
    }

    public void setPrenomMembre(String prenomMembre) {
        this.prenomMembre = prenomMembre;
    }

    public Timestamp getDatenaissanceMembre() {
        return datenaissanceMembre;
    }

    public void setDatenaissanceMembre(Timestamp datenaissanceMembre) {
        this.datenaissanceMembre = datenaissanceMembre;
    }

    public String getSexeMembre() {
        return sexeMembre;
    }

    public void setSexeMembre(String sexeMembre) {
        this.sexeMembre = sexeMembre;
    }
    
    
}
