package com.example.backend.service.impl;

import com.example.backend.model.Ticket;
import com.example.backend.repository.TicketRepository;
import com.example.backend.service.TicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class TicketServiceImpl implements TicketService {
    @Autowired
    private TicketRepository ticketRepository;

    @Override
    public List<Ticket> findAll(String startPlace,String endPlace) {
        return ticketRepository.findAll(startPlace,endPlace);
    }

    @Override
    public Ticket findById(Integer id) {
        return ticketRepository.findById(id).orElse(null);
    }

    @Override
    public void save(Ticket ticket) {
        ticketRepository.save(ticket);
    }

    @Override
    public void deleteTicket(Integer id) {
        ticketRepository.deleteById(id);
    }
}
