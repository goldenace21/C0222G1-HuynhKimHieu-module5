package com.example.backend.controller;

import com.example.backend.model.Ticket;
import com.example.backend.service.HomeService;
import com.example.backend.service.TicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin()
@RequestMapping("/api/manager-ticket/list")
public class TicketController {

    @Autowired
    private TicketService ticketService;

    @GetMapping
    @ResponseBody
    public ResponseEntity<List<Ticket>> getListTicket() {

        List<Ticket> ticketList = ticketService.findAll();

        if (ticketList == null) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(ticketList, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Ticket> findById(@PathVariable("id") Integer id) {
        Ticket ticket = ticketService.findById(id);
        return new ResponseEntity<>(ticket, HttpStatus.OK);
    }

    @PatchMapping
    public ResponseEntity<Ticket> BookingCusstomer

    @PostMapping
    public ResponseEntity<Ticket> createCustomer(@RequestBody Ticket ticket) {
        this.ticketService.save(ticket);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/{ticketId}")
    public ResponseEntity<Ticket> deleteTicket(@PathVariable("ticketId") Integer id) {
        this.ticketService.deleteTicket(id);
        return new ResponseEntity<>(HttpStatus.OK);

    }
}
