package com.example.backend.controller;

import com.example.backend.model.Home;
import com.example.backend.service.HomeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin()
@RequestMapping("/api/manager-home/list")
public class HomeController {

    @Autowired
    private HomeService homeService;

    @GetMapping(value = "")
    public ResponseEntity<List<Home>> getHome() {
        List<Home> homeList = this.homeService.findAll();
        if (homeList == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(homeList, HttpStatus.OK);
    }
}
