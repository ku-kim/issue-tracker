package dev.kukim.issues.user.auth.service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import java.nio.charset.StandardCharsets;
import java.util.Date;
import java.time.Instant;
import java.util.Map;
import javax.crypto.SecretKey;
import javax.validation.constraints.NotEmpty;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.context.properties.ConstructorBinding;
import org.springframework.validation.annotation.Validated;

@Validated
@ConstructorBinding
@ConfigurationProperties("jwt")
public class LoginTokenGenerator {

	private static final long HALF_HOUR = 30L;
	private static final int ONE_MINUTE = 60;

	@NotEmpty
	private final String jwtSecret;

	public LoginTokenGenerator(String jwtSecret) {
		this.jwtSecret = jwtSecret;
	}

	public String createToken(Long userId) {
		return generateToken(userId,
			Date.from(Instant.now().plusSeconds(ONE_MINUTE * HALF_HOUR)));
	}

	private String generateToken(Long userId, Date plusMinutes) {
		SecretKey secretKey = Keys.hmacShaKeyFor(jwtSecret.getBytes(StandardCharsets.UTF_8));
		return Jwts.builder()
			.setHeader(Map.of(
				"typ", "JWT",
				"alg", "HS256",
				"regDate", System.currentTimeMillis()))
			.setClaims(Map.of("userId", userId))
			.setExpiration(plusMinutes)
			.signWith(secretKey, SignatureAlgorithm.HS256)
			.compact();
	}

	public boolean validateToken(String token) {
		try {
			getClaims(token);
			return true;
		} catch (JwtException | IllegalArgumentException e) {
			return false;
		}
	}

	public Jws<Claims> getClaims(String token) {
		SecretKey secretKey = Keys.hmacShaKeyFor(jwtSecret.getBytes(StandardCharsets.UTF_8));
		return Jwts.parserBuilder()
			.setSigningKey(secretKey)
			.build()
			.parseClaimsJws(token);
	}

}
