package com.legalconnect.utility;

import java.util.ArrayList;
import java.util.List;

import com.legalconnect.model.laws;

public class DataLaw {

  public static List<laws> getlawsData() {
    List<laws> lawsList = new ArrayList<>();

    laws law1 = new laws();
    law1.setActNumber("IPC 302");
    law1.setLawType("Criminal");
    law1.setShortInfo("Punishment for murder under the Indian Penal Code.");

    laws law2 = new laws();
    law2.setActNumber("IPC 420");
    law2.setLawType("Criminal");
    law2.setShortInfo("Cheating and dishonestly inducing delivery of property.");

    laws law3 = new laws();
    law3.setActNumber("IT Act 2000");
    law3.setLawType("Cyber Law");
    law3.setShortInfo("Governs cyber crimes and e-commerce regulations in India.");

    laws law4 = new laws();
    law4.setActNumber("Contract Act 1872");
    law4.setLawType("Civil");
    law4.setShortInfo("Defines the framework of contracts and their enforcement.");

    laws law5 = new laws();
    law5.setActNumber("RTI Act 2005");
    law5.setLawType("Transparency");
    law5.setShortInfo("Empowers citizens to request information from public authorities.");

    lawsList.add(law1);
    lawsList.add(law2);
    lawsList.add(law3);
    lawsList.add(law4);
    lawsList.add(law5);

    return lawsList;
  }
}
