package com.example.backend.repository;

import com.example.backend.model.Ticket;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.List;
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

    @Query(value = "select * from ticket where start_place like %:startPlace% and end_place like %:endPlace%", nativeQuery = true)
    List<Ticket> findAll(@Param("startPlace") String startPlace, @Param("endPlace") String endPlace);
}
