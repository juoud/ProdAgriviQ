/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.dobati.prodagri.backingbeans;

import java.io.Serializable;
import javax.faces.flow.FlowScoped;
import javax.inject.Named;

/**
 *
 * @author Administrateur
 */
@Named
@FlowScoped("zFLOW_Partenaire")
public class FLOW_Partenaire implements Serializable{
    public String debugClassName(){
        return this.getClass().getSimpleName();
    }
    
    public String displayPagezFLOW_Partenaire1(){
        return "zFLOW_Partenaire1.xhtml";
    }
    
    public String displayPagezFLOW_Partenaire2(){
        return "zFLOW_Partenaire2.xhtml";
    }
    
    public String displayPagePrincipale(){
        return "zFLOW_Partenaire-return.xhtml";
    }
    
}
