package dev.kukim.issues.user.user.domain.repository;

import dev.kukim.issues.user.user.domain.User;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

	Optional<User> findByThirdPartyId(Long thirdPartyId);
}
