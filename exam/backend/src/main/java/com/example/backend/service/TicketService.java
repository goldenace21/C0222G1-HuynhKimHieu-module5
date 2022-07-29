package com.example.backend.service;

import com.example.backend.model.Ticket;

import java.util.List;

public interface TicketService {
    List<Ticket> findAll(String startPlace, String endPlace);

    Ticket findById(Integer id);

    void save(Ticket ticket);

    void deleteTicket(Integer id);
}
