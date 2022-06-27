package dev.kukim.issues.label.service;

import dev.kukim.issues.label.controller.request.LabelInsertRequest;
import dev.kukim.issues.label.controller.response.LabelListResponse;
import dev.kukim.issues.label.controller.response.LabelResponse;
import dev.kukim.issues.label.domain.Label;
import dev.kukim.issues.label.domain.repository.LabelRepository;
import dev.kukim.issues.milestone.domain.repository.MileStoneRepository;
import java.util.List;
import java.util.stream.Collectors;
import javax.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class LabelService {

	private final LabelRepository labelRepository;
	private final MileStoneRepository mileStoneRepository;

	public LabelListResponse showLabels() {
		List<LabelResponse> labelResponses = labelRepository.findAll()
			.stream()
			.map(LabelResponse::createBy)
			.collect(Collectors.toList());

		long labelsCount = labelRepository.count();
		long openedMilestonesCount = mileStoneRepository.countByIsOpen(true);

		return new LabelListResponse(labelsCount, openedMilestonesCount, labelResponses);
	}

}
