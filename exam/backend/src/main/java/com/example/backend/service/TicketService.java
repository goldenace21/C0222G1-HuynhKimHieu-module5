package com.example.backend.service;

import com.example.backend.model.Ticket;

import java.util.List;
import java.util.Optional;

public interface TicketService {
    List<Ticket> findAll(String startPlace);

    Ticket findById(Integer id);

    void save(Ticket ticket);

    void deleteTicket(Integer id);
}
