import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { StopEventsDetectionJobRequest, StopEventsDetectionJobResponse } from "../models/models_0";
import {
  deserializeAws_json1_1StopEventsDetectionJobCommand,
  serializeAws_json1_1StopEventsDetectionJobCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface StopEventsDetectionJobCommandInput extends StopEventsDetectionJobRequest {}
export interface StopEventsDetectionJobCommandOutput extends StopEventsDetectionJobResponse, __MetadataBearer {}

/**
 * <p>Stops an events detection job in progress.</p>
 */
export class StopEventsDetectionJobCommand extends $Command<
  StopEventsDetectionJobCommandInput,
  StopEventsDetectionJobCommandOutput,
  ComprehendClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StopEventsDetectionJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ComprehendClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StopEventsDetectionJobCommandInput, StopEventsDetectionJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComprehendClient";
    const commandName = "StopEventsDetectionJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StopEventsDetectionJobRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StopEventsDetectionJobResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StopEventsDetectionJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StopEventsDetectionJobCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StopEventsDetectionJobCommandOutput> {
    return deserializeAws_json1_1StopEventsDetectionJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
