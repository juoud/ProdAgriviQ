/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.dobati.prodagri.embeddables;

import javax.persistence.Embeddable;

/**
 *
 * @author Administrateur
 */
@Embeddable
public class CoordonneesMembre {
    private String adresseMembre;
    private String telephoneMembre;
    private String mobileMembre;
    private String adressecourrielleMembre;

    public String getAdresseMembre() {
        return adresseMembre;
    }

    public void setAdresseMembre(String adresseMembre) {
        this.adresseMembre = adresseMembre;
    }

    public String getTelephoneMembre() {
        return telephoneMembre;
    }

    public void setTelephoneMembre(String telephoneMembre) {
        this.telephoneMembre = telephoneMembre;
    }

    public String getMobileMembre() {
        return mobileMembre;
    }

    public void setMobileMembre(String mobileMembre) {
        this.mobileMembre = mobileMembre;
    }

    public String getAdressecourrielleMembre() {
        return adressecourrielleMembre;
    }

    public void setAdressecourrielleMembre(String adressecourrielleMembre) {
        this.adressecourrielleMembre = adressecourrielleMembre;
    }
    
    
            
}
