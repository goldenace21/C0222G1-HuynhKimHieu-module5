package com.example.backend.controller;

import com.example.backend.model.Ticket;
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

    @GetMapping("search/{place1}/{place2}")
    @ResponseBody
    public ResponseEntity<List<Ticket>> getListTicket(@PathVariable String place1,@PathVariable String place2) {
        if (place1.equals(" ")) {
            place1 = "";
        }
        if (place2.equals(" ")) {
            place2 = "";
        }
        List<Ticket> ticketList = ticketService.findAll(place1,place2);
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

    @PatchMapping("")
    public ResponseEntity<Ticket> Booking(@RequestBody Ticket ticket) {
        ticket.setQuantity(ticket.getQuantity() -1);
        this.ticketService.save(ticket);
        return new ResponseEntity<>(ticket, HttpStatus.OK);
    }

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
