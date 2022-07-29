package com.example.backend.service.impl;

import com.example.backend.model.Home;
import com.example.backend.repository.HomeRepository;
import com.example.backend.service.HomeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HomeServiceImpl implements HomeService {

    @Autowired
    private HomeRepository homeRepository;


    @Override
    public List<Home> findAll() {
        return homeRepository.findAll();
    }
}
