package com.hanchung.bonetta.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * MainController
 */
@Controller
public class MainController {

  @GetMapping("treat")
  public String treat() {
    System.out.println("treat 진입");

    return "treat";
  }

}