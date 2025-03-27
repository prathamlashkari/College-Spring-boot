package com.legalconnect.utility;

import java.util.ArrayList;
import java.util.List;

import com.legalconnect.model.lawyer;

public class DataLawyer {

  public static List<lawyer> getlawyersData() {
    List<lawyer> lawyerList = new ArrayList<>();

    lawyer lawyer1 = new lawyer();
    lawyer1.setId("L001");
    lawyer1.setName("Rahul Sharma");
    lawyer1.setType("Criminal");
    lawyer1.setEmail("rahul.sharma@legalconnect.com");
    lawyer1.setExperience("10 years");
    lawyer1.setCourt("Supreme Court");

    lawyer lawyer2 = new lawyer();
    lawyer2.setId("L002");
    lawyer2.setName("Ananya Verma");
    lawyer2.setType("Corporate");
    lawyer2.setEmail("ananya.verma@legalconnect.com");
    lawyer2.setExperience("7 years");
    lawyer2.setCourt("High Court");

    lawyer lawyer3 = new lawyer();
    lawyer3.setId("L003");
    lawyer3.setName("Vikram Singh");
    lawyer3.setType("Family Law");
    lawyer3.setEmail("vikram.singh@legalconnect.com");
    lawyer3.setExperience("12 years");
    lawyer3.setCourt("District Court");

    lawyer lawyer4 = new lawyer();
    lawyer4.setId("L004");
    lawyer4.setName("Priya Mehta");
    lawyer4.setType("Intellectual Property");
    lawyer4.setEmail("priya.mehta@legalconnect.com");
    lawyer4.setExperience("8 years");
    lawyer4.setCourt("High Court");

    lawyer lawyer5 = new lawyer();
    lawyer5.setId("L005");
    lawyer5.setName("Arjun Kapoor");
    lawyer5.setType("Cyber Law");
    lawyer5.setEmail("arjun.kapoor@legalconnect.com");
    lawyer5.setExperience("9 years");
    lawyer5.setCourt("Supreme Court");

    lawyer lawyer6 = new lawyer();
    lawyer6.setId("L006");
    lawyer6.setName("Sanya Gupta");
    lawyer6.setType("Civil");
    lawyer6.setEmail("sanya.gupta@legalconnect.com");
    lawyer6.setExperience("11 years");
    lawyer6.setCourt("District Court");

    lawyer lawyer7 = new lawyer();
    lawyer7.setId("L007");
    lawyer7.setName("Rohit Malhotra");
    lawyer7.setType("Real Estate");
    lawyer7.setEmail("rohit.malhotra@legalconnect.com");
    lawyer7.setExperience("6 years");
    lawyer7.setCourt("High Court");

    lawyer lawyer8 = new lawyer();
    lawyer8.setId("L008");
    lawyer8.setName("Meera Joshi");
    lawyer8.setType("Tax Law");
    lawyer8.setEmail("meera.joshi@legalconnect.com");
    lawyer8.setExperience("15 years");
    lawyer8.setCourt("Supreme Court");

    lawyer lawyer9 = new lawyer();
    lawyer9.setId("L009");
    lawyer9.setName("Deepak Anand");
    lawyer9.setType("Banking & Finance");
    lawyer9.setEmail("deepak.anand@legalconnect.com");
    lawyer9.setExperience("13 years");
    lawyer9.setCourt("High Court");

    lawyer lawyer10 = new lawyer();
    lawyer10.setId("L010");
    lawyer10.setName("Neha Khandelwal");
    lawyer10.setType("Environmental Law");
    lawyer10.setEmail("neha.khandelwal@legalconnect.com");
    lawyer10.setExperience("5 years");
    lawyer10.setCourt("District Court");

    lawyerList.add(lawyer1);
    lawyerList.add(lawyer2);
    lawyerList.add(lawyer3);
    lawyerList.add(lawyer4);
    lawyerList.add(lawyer5);
    lawyerList.add(lawyer6);
    lawyerList.add(lawyer7);
    lawyerList.add(lawyer8);
    lawyerList.add(lawyer9);
    lawyerList.add(lawyer10);

    return lawyerList;
  }
}
