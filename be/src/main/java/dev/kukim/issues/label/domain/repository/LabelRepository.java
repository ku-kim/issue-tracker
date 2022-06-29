package dev.kukim.issues.label.domain.repository;

import dev.kukim.issues.label.domain.Label;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LabelRepository extends JpaRepository<Label, Long> {

}
