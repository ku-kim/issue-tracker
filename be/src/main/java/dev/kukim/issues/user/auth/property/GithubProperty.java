package dev.kukim.issues.user.auth.property;

import lombok.Getter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
@Getter
public class GithubProperty {

	@Value("${oauth.provider.github.token-uri}")
	private String accessTokenUri;

	@Value("${oauth.provider.github.user-info}")
	private String userInfoUri;

	@Value("${oauth.client.github.client.id}")
	private String clientId;

	@Value("${oauth.client.github.client.secret}")
	private String clientSecret;
}
