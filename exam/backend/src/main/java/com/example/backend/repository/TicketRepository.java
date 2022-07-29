package com.example.backend.repository;

import com.example.backend.model.Ticket;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.transaction.Transactional;
import java.util.Optional;

@Transactional
public interface TicketRepository extends JpaRepository<Ticket, Integer> {

//    @Modifying
//    @Query(value = "update customer set delete_status = 1 where idAuto = :idAuto", nativeQuery = true)
//    void deleteById(@Param("idAuto") Integer idAuto);
//
//    @Query(value = "select * from customer where delete_status = 0 and name like %:name%", nativeQuery = true)
//    Page<Customer> findAll(Pageable pageable, @Param("name") String name);
//
//    Optional<Customer> findById(Integer id);
}
